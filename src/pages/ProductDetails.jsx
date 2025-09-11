import { MdArrowBackIos } from 'react-icons/md';

function ProductDetails() {
  return (
    <div className="font-lato p-4 bg-white">
      <header className="flex relative items-center justify-center">
        <div className="absolute left-2 cursor-pointer">
          <MdArrowBackIos />
        </div>
        <p className="lg:hidden">Product Details</p>
      </header>

      <main className="overflow-y-auto overflow-x-hidden scrollbar-hide text-start flex flex-col gap-2">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:grid lg:grid-cols-2 lg:gap-5 gap-5 py-6"></div>
      </main>
    </div>
  );
}

export default ProductDetails;
