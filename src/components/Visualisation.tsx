import Data from "../assets/data.png";
import {Link} from "react-router-dom";

const Visualisation = () => {
    const showModal = () => {
        const modal = document.getElementById('my_modal_2') as HTMLDialogElement | null;
        if (modal) {
            modal.showModal();
        }
    };

    return (
        <div>
            <div className="max-w-6xl mx-auto pb-32">
                <h1 className="text-3xl font-bold mb-4">Trends in Skin Cancer and Rising Temperatures in Melbourne</h1>
                <div className=" mb-8" onClick={showModal}>
                    <img src={Data} alt="Visualization" className="w-1/2 rounded-lg shadow-lg"/>
                    <p className={"p-0 text-xs text-gray-400"}>Click image to expand</p>
                </div>
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box modal-box w-11/12 max-w-5xl">
                        <img src={Data} alt="Visualization" style={{width: '1024px', height: '586px'}}
                             className="rounded-lg shadow-lg"/>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
                <div className="mb-8">
                </div>
                <p className="text-lg pb-16">
                    The visualization highlights a concerning association between escalating UV Index levels and the
                    incidence of skin cancer in Australia from 2007 to 2022. It reveals a rise in skin cancer instances
                    paralleled by elevated UV exposure, indicating a potential connection between sun exposure and the
                    risk of skin cancer. The data underscores the importance of raising awareness and implementing
                    preventive measures to mitigate the effects of UV radiation.
                </p>
                <Link
                    to={"/sunsafe/app"}
                    className={"button bg-slate-200 hover:bg-orange-400 p-8 rounded-lg max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text35xl dark:text-white"}> Check
                    UV Now
                </Link>
            </div>

        </div>
    );
};

export default Visualisation;
