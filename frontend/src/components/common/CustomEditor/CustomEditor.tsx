import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
interface CustomEditorProps {
  editorRef: any;
}
const CustomEditor = ({ editorRef }: CustomEditorProps) => {
  return (
    <Editor
      // initialValue={value}
      // onChange={onChange}
      height={"99%"}
      ref={editorRef}
    />
  );
};
export default CustomEditor;
