import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Policies } from "./components/Policies";
import { Contact } from "./components/Contact";
import { NotFound } from "./components/NotFound";

// 직업 페이지
import { JobParent } from "./components/policy/job/JobParent";
import { JobSelfEmployed } from "./components/policy/job/JobSelfEmployed";
import { JobStudentCareer } from "./components/policy/job/JobStudentCareer";
import { JobOfficeWorker } from "./components/policy/job/JobOfficeWorker";

// 나이 페이지
import { Age2030 } from "./components/policy/age/Age2030";
import { Age4050 } from "./components/policy/age/Age4050";
import { Age5060 } from "./components/policy/age/Age5060";
import { Age70Plus } from "./components/policy/age/Age70Plus";

// 지역 페이지
import { RegionA } from "./components/policy/region/RegionA";
import { RegionB } from "./components/policy/region/RegionB";
import { RegionC } from "./components/policy/region/RegionC";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "policies", Component: Policies },

      // 직업 페이지
      { path: "policy/job/parent", Component: JobParent },
      { path: "policy/job/self-employed", Component: JobSelfEmployed },
      { path: "policy/job/student-career", Component: JobStudentCareer },
      { path: "policy/job/office-worker", Component: JobOfficeWorker },

      // 나이 페이지
      { path: "policy/age/20-30", Component: Age2030 },
      { path: "policy/age/40-50", Component: Age4050 },
      { path: "policy/age/50-60", Component: Age5060 },
      { path: "policy/age/70-plus", Component: Age70Plus },

      // 지역 페이지
      { path: "policy/region/a", Component: RegionA },
      { path: "policy/region/b", Component: RegionB },
      { path: "policy/region/c", Component: RegionC },

      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);