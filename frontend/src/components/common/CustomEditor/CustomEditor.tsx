import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
const CustomEditor = ({ value, onChange, useRef }) => {
  return (
    <Editor
      initialValue={value}
      onChange={onChange}
      height={"99%"}
      ref={useRef}
    />
  );
};
export default CustomEditor;
