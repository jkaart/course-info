import Part from "./Part";
import { CoursePart } from "../types";

const Content = ({ courseParts }: { courseParts: Array<CoursePart> }) => (
  courseParts.map(part => <Part coursePart={part} />)
)

export default Content;
