import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

export const Model = ({ isModalOpen, data, handleClose }) => {
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isModalOpen]);
  return (
    <>
      <div>
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content w-2/3 relative">
              <span
                onClick={() => handleClose()}
                className="absolute top-0  right-0 p-4"
              >
                <FaTimes />
              </span>
              <div className="flex">
                <div className="relative">
                  <div className="modal-poster">
                    <img
                      src={data.img}
                      alt={data.title}
                      className="max-w-none"
                    />
                  </div>

                  <div className="tag absolute top-0 right-0 z-10">
                    <p className="bg-green-600 m-2 rounded-full w-12 h-12 grid place-items-center text-white">
                      {data.tag}
                    </p>
                  </div>
                </div>
                <div className="modal-info ml-6">
                  <h2 className="text-4xl">{data.title}</h2>
                  <p className="mt-4 text-2xl">{data.short_description}</p>
                  <div className="flex mb-4 mt-4 text-yellow-700">
                    {data.rating &&
                      data.rating.map((star, index) => (
                        <p key={index}>{star.icon}</p>
                      ))}
                  </div>
                  <p className="text-red-600 text-2xl">${data.price}</p>

                  <p className="mt-2">{data.description}</p>

                  <div className="flex items-center">
                    <p className="font-semibold">Size: </p>
                    <div className="size-btn mt-4 mb-4">
                      <button className="ml-2 btn pt-1 pb-1 pr-3 pl-3">
                        Small
                      </button>
                      <button className="ml-2 btn pt-1 pb-1 pr-3 pl-3">
                        Medium
                      </button>
                      <button className="ml-2 btn pt-1 pb-1 pr-3 pl-3">
                        Large
                      </button>
                      <button className="ml-2 btn pt-1 pb-1 pr-3 pl-3">
                        Extra Large
                      </button>
                    </div>
                  </div>
                  <p className="text-green-700">In Stock 300 Items</p>
                  <div className="flex items-center">
                    <div className="flex mr-3">
                      <button className="border mt-4  pt-3 pb-3 pr-6 pl-6">
                        +
                      </button>
                      <span className=" border mt-4  pt-3 pb-3 pr-6 pl-6 count">
                        1
                      </span>
                      <button className="border mt-4  pt-3 pb-3 pr-6 pl-6">
                        -
                      </button>
                    </div>
                    <div className="addtocart mr-3">
                      <button className="mt-4 btn pt-3 pb-3 pr-6 pl-6">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
