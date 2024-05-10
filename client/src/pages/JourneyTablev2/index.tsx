import { Menu, Transition } from "@headlessui/react";
import Button, { ButtonType } from "components/Buttonv2";
import Input from "components/Inputv2";
import Table from "components/Table";
import { format } from "date-fns";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDebounce } from "react-use";
import ApiService from "services/api.service";
import { Workflow } from "types/Workflow";
import NameJourneyModal from "./Modals/NameJourneyModal";
import searchIconImage from "assets/svg/search-icon.svg";
import threeDotsIcon from "assets/svg/three-dots-icon.svg";
import emptyDataImage from "assets/svg/empty-data.svg";
import sortAscChevronsImage from "assets/svg/sort-asc-chevrons.svg";
import sortDescChevronsImage from "assets/svg/sort-desc-chevrons.svg";
import sortNoneChevronsImage from "assets/svg/sort-none-chevrons.svg";
import Pagination from "components/Pagination";
import DeleteJourneyModal from "./Modals/DeleteJourneyModal";

enum FilterOption {
  ALL,
  ACTIVE,
  DRAFT,
  PAUSED,
  STOPPED,
  ENROLLING,
}

const filterOptionToTextMap: Record<FilterOption, string> = {
  [FilterOption.ALL]: "Todos",
  [FilterOption.ACTIVE]: "Ativos",
  [FilterOption.DRAFT]: "Criandos",
  [FilterOption.PAUSED]: "Pausados",
  [FilterOption.STOPPED]: "Parados",
  [FilterOption.ENROLLING]: "Rodando",
};

const filterOptionsToRender: FilterOption[] = [
  FilterOption.ALL,
  FilterOption.ACTIVE,
  FilterOption.DRAFT,
  FilterOption.PAUSED,
  FilterOption.STOPPED,
  FilterOption.ENROLLING,
];

export type ChosenFilter =
  | FilterOption.ALL
  | Exclude<FilterOption, FilterOption.ALL>[];

interface JourneyRowData {
  id: string;
  name: string;
  status: JourneyStatus;
  enrolledCount: number;
  latestChangerEmail?: string;
  lastUpdate: string;
}

export enum JourneyStatus {
  ACTIVE = "Ativo",
  PAUSED = "Pausado",
  STOPPED = "Parado",
  DELETED = "Deletado",
  DRAFT = "Pronto",
  ENROLLING = "Rodando",
}

export const journeyStatusClassName: Record<JourneyStatus, string> = {
  [JourneyStatus.ACTIVE]: "bg-[#DCFCE7] text-[#14532D]",
  [JourneyStatus.DELETED]: "",
  [JourneyStatus.ENROLLING]: "bg-[#FEF9C3] text-[#713F12]",
  [JourneyStatus.DRAFT]: "bg-[#E0F2FE] text-[#0C4A6E]",
  [JourneyStatus.PAUSED]: "bg-[#FEF9C3] text-[#713F12]",
  [JourneyStatus.STOPPED]: "bg-[#F3F4F6] text-[#6B7280]",
};

const filterOptionToJourneyStatusMap: Record<
  Exclude<FilterOption, FilterOption.ALL>,
  JourneyStatus
> = {
  [FilterOption.ACTIVE]: JourneyStatus.ACTIVE,
  [FilterOption.ENROLLING]: JourneyStatus.ENROLLING,
  [FilterOption.DRAFT]: JourneyStatus.DRAFT,
  [FilterOption.PAUSED]: JourneyStatus.PAUSED,
  [FilterOption.STOPPED]: JourneyStatus.STOPPED,
};

enum SortProperty {
  STATUS = "status",
  LAST_UPDATE = "latestSave",
}

enum SortType {
  ASC = "asc",
  DESC = "desc",
}

interface SortOptions {
  sortBy: SortProperty;
  sortType: SortType;
}

const ITEMS_PER_PAGE = 10;

const JourneyTablev2 = () => {
  const navigate = useNavigate();

  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [chosenFilter, setChosenFilter] = useState<ChosenFilter>(
    FilterOption.ALL
  );
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [rows, setRows] = useState<JourneyRowData[]>([]);
  const [isNameJourneyModalOpen, setIsNameJourneyModalOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);

  const [sortOptions, setSortOptions] = useState<SortOptions>({
    sortBy: SortProperty.LAST_UPDATE,
    sortType: SortType.DESC,
  });

  const [journeyToDelete, setJourneyToDelete] = useState<string>();

  const loadData = async () => {
    setIsLoading(true);

    try {
      const {
        data: { data, totalPages },
      } = await ApiService.get<{ data: Workflow[]; totalPages: number }>({
        url: `/journeys?take=${ITEMS_PER_PAGE}&skip=${
          (currentPage - 1) * ITEMS_PER_PAGE
        }&search=${search}&orderBy=${sortOptions.sortBy}&orderType=${
          sortOptions.sortType
        }${
          chosenFilter === FilterOption.ALL
            ? ""
            : `&filterStatuses=${chosenFilter
                .map((filter) => filterOptionToJourneyStatusMap[filter])
                .join(",")}`
        }`,
      });

      setRows(
        data.map((workflow: any) => {
          let status: JourneyStatus = JourneyStatus.DRAFT;

          if (workflow.isActive) {
            if (workflow.isEnrolling) status = JourneyStatus.ENROLLING;
            else status = JourneyStatus.ACTIVE;
          }
          if (workflow.isPaused) status = JourneyStatus.PAUSED;
          if (workflow.isStopped) status = JourneyStatus.STOPPED;
          if (workflow.isDeleted) status = JourneyStatus.DELETED;

          return {
            id: workflow.id,
            name: workflow.name,
            status,
            enrolledCount: workflow.enrolledCustomers || 0,
            lastUpdate: workflow.latestSave,
            latestChangerEmail: workflow.latestChangerEmail,
          };
        })
      );
      setPagesCount(totalPages);
      setIsLoaded(true);
    } catch (e) {
      toast.error("Failed to load data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [chosenFilter, search, currentPage, sortOptions]);

  useEffect(() => {
    setCurrentPage(1);
  }, [chosenFilter, search, sortOptions]);

  useEffect(() => {
    setSearch("");
  }, [showSearch]);

  useDebounce(
    () => {
      if (isFirstRender) {
        setIsFirstRender(false);
        return;
      }
      loadData();
    },
    500,
    [search]
  );

  const handleChangeChosenFilter = (filterOption: FilterOption) => {
    if (filterOption === FilterOption.ALL) {
      setChosenFilter(FilterOption.ALL);
      return;
    }

    if (chosenFilter === FilterOption.ALL) {
      setChosenFilter([filterOption]);
      return;
    }

    const newChosenFilter = [...chosenFilter];
    if (chosenFilter.includes(filterOption)) {
      newChosenFilter.splice(newChosenFilter.indexOf(filterOption), 1);

      setChosenFilter(
        newChosenFilter.length > 0 ? newChosenFilter : FilterOption.ALL
      );

      return;
    }

    newChosenFilter.push(filterOption);

    setChosenFilter(newChosenFilter);
  };

  const duplicateJourney = async (id: string) => {
    await ApiService.post({ url: "/journeys/duplicate/" + id });
    await loadData();
  };

  return (
    <div className="bg-[#F3F4F6] p-5 flex flex-col gap-5 font-inter font-normal text-[14px] text-[#111827] leading-[22px]">
      <div className="flex justify-between">
        <div className="text-[20px] font-semibold leading-[28px]">Jornadas</div>
        <Button
          type={ButtonType.PRIMARY}
          onClick={() => setIsNameJourneyModalOpen(true)}
          id="create-journey"
        >
          Criar Workflow
        </Button>
      </div>
      <div className="p-5 rounded-lg bg-white flex flex-col gap-5">
        {rows.length === 0 &&
        chosenFilter === FilterOption.ALL &&
        search === "" &&
        isLoaded ? (
          <div className="w-full h-[300px] flex items-center justify-center select-none">
            <div className="flex flex-col items-center gap-5">
              <img src={emptyDataImage} />

              <div className="font-inter text-[16px] font-semibold leading-[24px] text-[#4B5563]">
                Create a journey to engage your customers
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center">
              <div className="flex gap-[10px]">
                {filterOptionsToRender.map((filterOption, i) => (
                  <button
                    className={`px-[12px] py-[5px] rounded ${
                      (chosenFilter === FilterOption.ALL &&
                        filterOption === FilterOption.ALL) ||
                      (chosenFilter !== FilterOption.ALL &&
                        filterOption !== FilterOption.ALL &&
                        chosenFilter.includes(filterOption))
                        ? "border border-[#6366F1] bg-[#EEF2FF] text-[#6366F1]"
                        : ""
                    }`}
                    onClick={() => handleChangeChosenFilter(filterOption)}
                    key={i}
                  >
                    {filterOptionToTextMap[filterOption]}
                  </button>
                ))}
              </div>

              {showSearch ? (
                <div className="flex gap-[10px] items-center">
                  <Input
                    value={search}
                    onChange={setSearch}
                    placeholder="Search all journeys"
                    showClearButton
                  />

                  <Button
                    type={ButtonType.LINK}
                    onClick={() => setShowSearch(false)}
                  >
                    Cancel
                  </Button>
                </div>
              ) : (
                <button onClick={() => setShowSearch(true)}>
                  <img src={searchIconImage} />
                </button>
              )}
            </div>

            <Table
              isLoading={isLoading}
              headings={[
                <div className="px-5 py-[10px] select-none">Nome</div>,
                <div className="px-5 py-[10px] select-none">Status</div>,
                <div className="px-5 py-[10px] select-none">
                  -
                </div>,
                <div className="px-5 py-[10px] select-none">
                  Ultimo a editar
                </div>,
                <div
                  className="px-5 py-[10px] select-none flex gap-[2px] items-center cursor-pointer"
                  onClick={() => {
                    if (sortOptions.sortBy !== SortProperty.LAST_UPDATE) {
                      setSortOptions({
                        sortBy: SortProperty.LAST_UPDATE,
                        sortType: SortType.DESC,
                      });

                      return;
                    }

                    if (sortOptions.sortType === SortType.ASC) {
                      setSortOptions({
                        sortBy: SortProperty.LAST_UPDATE,
                        sortType: SortType.DESC,
                      });

                      return;
                    }

                    setSortOptions({
                      sortBy: SortProperty.LAST_UPDATE,
                      sortType: SortType.ASC,
                    });
                  }}
                >
                  <div>Ultima atualização</div>
                  <div>
                    <img
                      src={
                        sortOptions.sortBy === SortProperty.LAST_UPDATE
                          ? sortOptions.sortType === SortType.ASC
                            ? sortAscChevronsImage
                            : sortDescChevronsImage
                          : sortNoneChevronsImage
                      }
                    />
                  </div>
                </div>,
                <div className="px-5 py-[10px] select-none"></div>,
              ]}
              rowsData={rows}
              rows={rows.map((row) => [
                <button
                  className="text-[#6366F1]"
                  onClick={() => navigate("/flow/" + row.id)}
                >
                  {row.name}
                </button>,
                <div
                  className={`px-[10px] py-[2px] rounded-[14px] w-fit ${
                    journeyStatusClassName[row.status]
                  }`}
                >
                  {row.status}
                </div>,
                <div>
                  {row.status === JourneyStatus.DRAFT ? (
                    "-"
                  ) : (
                    <>{row.enrolledCount} persons</>
                  )}
                </div>,
                <div>{row.latestChangerEmail || "-"}</div>,
                <div>
                  {format(new Date(row.lastUpdate), "MM/dd/yyyy HH:mm")}
                </div>,
                <Menu as="div" className="relative">
                  <Menu.Button>
                    <button className="px-[5px] py-[11px] rounded">
                      <img src={threeDotsIcon} />
                    </button>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute z-[120] right-0 origin-top-right w-[200px] h-[72px] py-[4px] rounded-sm bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`block w-full text-left py-[5px] px-[12px] ${
                              active ? "bg-[#F3F4F6]" : ""
                            }`}
                            onClick={() => duplicateJourney(row.id)}
                          >
                            Duplicar
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`block w-full text-left py-[5px] px-[12px] text-[#F43F5E] ${
                              active ? "bg-[#F3F4F6]" : ""
                            }`}
                            onClick={() => setJourneyToDelete(row.id)}
                          >
                            Deletar
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>,
              ])}
            />
          </>
        )}

        {pagesCount > 1 && (
          <div className="flex justify-center items-center">
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={pagesCount}
            />
          </div>
        )}
      </div>

      <NameJourneyModal
        isOpen={isNameJourneyModalOpen}
        onClose={() => setIsNameJourneyModalOpen(false)}
      />

      <DeleteJourneyModal
        isOpen={!!journeyToDelete}
        journeyId={journeyToDelete}
        onClose={() => {
          setJourneyToDelete(undefined);
          loadData();
        }}
      />
    </div>
  );
};

export default JourneyTablev2;
