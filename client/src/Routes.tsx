import { BrowserRouter, Routes, Route } from "react-router-dom";
import DrawerLayout from "components/DrawerLayout";
import FlowBuilderv2 from "pages/FlowBuilderv2";
import JourneyTablev2 from "pages/JourneyTablev2";

export default () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DrawerLayout>
              <JourneyTablev2 />
            </DrawerLayout>
          }
        />
        <Route
          path="/flow/:id"
          element={
            <DrawerLayout
              expandable
            >
              <FlowBuilderv2 />
            </DrawerLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
