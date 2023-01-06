import { useState, useContext, createContext } from "react";
import useFetch from "./useFetch";

const AppContext = createContext();

const AppProvider = ({ children }) => {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   const [query, setQuery] = useState("negroni");
   const [scrollPosition, setScrollPosition] = useState(0);
   const { data, isLoading, isError, count } = useFetch(`s=${query}`);

   const searchCocktail = (input) => {
      setQuery(input);
   };

   const openSidebar = () => {
      setIsSidebarOpen(true);
   };

   const closeSidebar = () => {
      setIsSidebarOpen(false);
   };

   const getScrollPosition = (value) => {
      setScrollPosition(value);
   };

   const deleteScrollPosition = (value) => {
      setScrollPosition(0);
   };

   return (
      <AppContext.Provider
         value={{
            isSidebarOpen,
            openSidebar,
            closeSidebar,
            query,
            isLoading,
            isError,
            data,
            count,
            searchCocktail,
            getScrollPosition,
            scrollPosition,
            deleteScrollPosition,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};

const useGlobalContext = () => {
   return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
