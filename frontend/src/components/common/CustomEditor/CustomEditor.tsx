import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
const CustomEditor = ({ value, onChange }) => {
  return <Editor initialValue={value} onChange={onChange} height={"99%"} />;
};
export default CustomEditor;
