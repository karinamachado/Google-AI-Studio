import { createBrowserRouter } from "react-router";
import Landing from "./pages/Landing";
import { Dashboard } from "./pages/Dashboard";
import { NovoAluno } from "./pages/NovoAluno";
import { Alunos } from "./pages/Alunos";
import { CheckIns } from "./pages/CheckIns";
import { Recepcao } from "./pages/Recepcao";
import { Configuracoes } from "./pages/Configuracoes";

export const router = createBrowserRouter([
  { path: "/",               Component: Landing       },
  { path: "/dashboard",      Component: Dashboard     },
  { path: "/alunos",         Component: Alunos        },
  { path: "/checkins",       Component: CheckIns      },
  { path: "/novo-aluno",     Component: NovoAluno     },
  { path: "/recepcao",       Component: Recepcao      },
  { path: "/configuracoes",  Component: Configuracoes },
  { path: "*",               Component: Landing       },
]);