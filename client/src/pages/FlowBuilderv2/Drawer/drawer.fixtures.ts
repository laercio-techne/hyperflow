import {
  EmailIcon,
  SMSIcon,
  SlackIcon,
  PushIcon,
  WebhookIcon,
  ExitIcon,
  TimeDelayIcon,
  TimeWindowIcon,
  WaitUntilIcon,
  JumpToIcon,
  CustomModalIcon,
  UserAttributeIcon,
  ExperimentIcon,
  CheckIcon
} from "pages/FlowBuilderv2/Icons";
import { FlowBuilderDrawerFixture } from "./FlowBuilderDrawer";

export enum DrawerAction {
  EMAIL = "email",
  SMS = "sms",
  SLACK = "slack",
  PUSH = "push",
  WEBHOOK = "webhook",
  CUSTOM_MODAL = "customModal",
  TRACKER = "tracker",
  JUMP_TO = "jumpTo",
  EXIT = "exit",
  WAIT_UNTIL = "waitUntil",
  TIME_DELAY = "timeDelay",
  TIME_WINDOW = "timeWindow",
  MULTISPLIT = "multisplit",
  EXPERIMENT = "experiment",
  USER_ATTRIBUTE = "userAttribute",
}

const flowBuilderDrawerFixtures: FlowBuilderDrawerFixture[] = [
  {
    groupName: "Serviços",
    children: [
      {
        id: DrawerAction.SMS,
        icon: WebhookIcon(),
        text: "Validar Falta",
      },
      {
        id: DrawerAction.SMS,
        icon: WebhookIcon(),
        text: "Validar Dia Semana",
      },
      {
        id: DrawerAction.SMS,
        icon: WebhookIcon(),
        text: "Validar Matricula",
      },
      {
        id: DrawerAction.SMS,
        icon: WebhookIcon(),
        text: "Validar Saldo",
      },
      {
        id: DrawerAction.SMS,
        icon: WebhookIcon(),
        text: "Validar Periodo",
      },
      {
        id: DrawerAction.WEBHOOK,
        icon: WebhookIcon(),
        text: "Verificar Aceite",
      },
      {
        id: DrawerAction.TRACKER,
        icon: CustomModalIcon(),
        text: "Registrar Ferias",
      },
      {
        id: DrawerAction.TRACKER,
        icon: CustomModalIcon(),
        text: "Excluir Ferias",
      },
      {
        id: DrawerAction.EMAIL,
        icon: EmailIcon(),
        text: "Enviar email",
      },
      
      {
        id: DrawerAction.EXIT,
        icon: ExitIcon(),
        text: "Fim",
      },
    ],
  },
  {
    groupName: "Tempo",
    children: [
      {
        id: DrawerAction.WAIT_UNTIL,
        icon: WaitUntilIcon(),
        text: "Esperar Ate",
      },
      {
        id: DrawerAction.TIME_WINDOW,
        icon: TimeWindowIcon(),
        text: "Janel de Tempo",
      },
    ],
  },
  {
    groupName: "Condicional",
    children: [
      {
        id: DrawerAction.MULTISPLIT,
        icon: UserAttributeIcon(),
        text: "Condicional",
      },
    ],
  },
  {
    groupName: "Paralelo",
    children: [
      {
        id: DrawerAction.EXPERIMENT,
        icon: ExperimentIcon(),
        text: "Paralelo",
      },
    ],
  },
  {
    groupName: "Pular",
    children: [
      {
        id: DrawerAction.JUMP_TO,
        icon: JumpToIcon(),
        text: "Ir para",
      }
    ]
  },
];

export default flowBuilderDrawerFixtures;
