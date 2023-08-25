import ModalCountries from "../ModalCountries";
import { americanCountries, europeCountries } from "../constants";

const Modal = ({ modal, hideModel }) => {
  return (
    <>
      {modal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mx-auto my-auto w-full">
            <div className="relative my-6 mx-auto max-w-3xl sm:w-2/4 xl:w-2/5 w-auto">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start flex-col justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold">Choose a country</h3>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: 30,
                    }}
                  >
                    <span style={{ marginRight: 100 }}>
                      <ModalCountries
                        countries={europeCountries}
                        header="Europe"
                      />
                    </span>
                    <ModalCountries
                      header="America"
                      countries={americanCountries}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-2 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={hideModel}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
