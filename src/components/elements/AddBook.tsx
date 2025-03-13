import { RiFileUploadLine } from "react-icons/ri";
import Button from "./Button";
import Input from "./Input";

const AddBook: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-neutral-500 rounded-[32px] p-6 w-[24rem] lg:w-[43rem] flex flex-col items-center gap-4 shadow-md">
        {/* Judul */}
        <h2 className="mt-2 text-3xl font-WulkanDisplayBold text-primary-500">
          Add Local Book
        </h2>

        {/* Comment input */}
        <div className="space-y-4 lg:w-[40rem] w-[20rem]">
          <label className="text-base-black font-AileronLight">Book Name</label>
          <Input type="text" placeholder="Name" />
          <label className="text-base-black font-AileronLight">Author</label>
          <Input type="text" placeholder="Author" />
        </div>

        
        <Button className="bg-primary-500 hover:bg-primary-300 active:bg-primary-700 rounded-8 w-[20rem] lg:w-[40rem] gap-2">Upload <RiFileUploadLine/> </Button>
        {/* Done button */}
        <div className="w-full flex justify-end mr-10">
          <Button className="px-8 py-4 bg-[#B2B2B5] text-[#191919] rounded-md hover:bg-gray-500 active:bg-gray-500">
            Done
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
