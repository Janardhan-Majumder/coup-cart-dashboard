import { Button } from "antd";
import { useMemo, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { LiaArrowLeftSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import PageHeading from "../../Components/PageHeading";

const EditTermsConditions = () => {
  const navigate = useNavigate();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const placeholder = "Enter your update terms & conditions...";
  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "Start typing...",
      height: "60vh",
    }),
    [placeholder]
  );
  console.log(content);
  return (
    <div className="min-h-[75vh] flex flex-col justify-between">
      <div className="space-y-6">
        <PageHeading title={"Edit Terms & Conditions"} backPath={"/settings/terms-conditions"}/>
        <div className="">
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => {
              setContent(newContent);
            }}
            className="text-wrap"
            config={config}
            tabIndex={1}
          />
        </div>
      </div>
      <div className="flex justify-end pt-10">
        <Button
          style={{
            backgroundColor: "#FF8400",
            color: "white",
          }}
          className="w-[484px] h-[60px] py-3 rounded-lg text-[18px] font-medium  duration-200"
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditTermsConditions;
