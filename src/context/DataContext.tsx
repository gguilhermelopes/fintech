import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import useFetch from "../hooks/useFetch";

export type ISale = {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "pix" | "cartao";
  data: string;
  parcelas: number | null;
};

type IDataContext = {
  data: ISale[] | null;
  loading: boolean;
  error: string | null;
  start: string;
  setStart: Dispatch<SetStateAction<string>>;
  finish: string;
  setFinish: Dispatch<SetStateAction<string>>;
};

const DataContext = createContext<IDataContext | null>(null);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context)
    throw new Error("useData needs to be inside DataContextProvider");
  return context;
};

const getDate = (n: number) => {
  const date = new Date();
  date.setDate(date.getDate() - n);

  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();

  return `${yyyy}-${mm}-${dd}`;
};

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const [start, setStart] = useState(getDate(30));
  const [finish, setFinish] = useState(getDate(0));

  const { data, loading, error } = useFetch<ISale[]>(
    `https://data.origamid.dev/vendas/?inicio=${start}&final=${finish}`
  );

  console.log(data);

  return (
    <DataContext.Provider
      value={{ data, loading, error, start, setStart, finish, setFinish }}
    >
      {children}
    </DataContext.Provider>
  );
};
