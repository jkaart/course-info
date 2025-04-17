import { CoursePart } from "../types";

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Part = ({ coursePart }: { coursePart: CoursePart }) => {
  switch (coursePart.kind) {
    case 'basic':
      return (
        <div>
          <div>
            <b>{coursePart.name} {coursePart.exerciseCount}</b>
          </div>
          <div>
            <i>{coursePart.description}</i>
          </div>
        </div>
      )
    case 'group':
      return (
        <div>
          <div>
            <b>{coursePart.name} {coursePart.exerciseCount}</b>
          </div>
          <div>
            project exercises {coursePart.groupProjectCount}
          </div>
        </div>
      )
    case 'background':
      return (
        <div>
          <div>
            <b>{coursePart.name} {coursePart.exerciseCount}</b>
          </div>
          <div>
            <i>{coursePart.description}</i>
          </div>
          <div>
            submit to {coursePart.backgroundMaterial}
          </div>
        </div>
      )
    case 'special':
      return (
        <div>
          <div>
            <b>{coursePart.name} {coursePart.exerciseCount}</b>
          </div>
          <div>
            <i>{coursePart.description}</i>
          </div>
          <div>
            required skills: {coursePart.requirements.join(', ')}
          </div>
        </div>
      )
    default:
      return assertNever(coursePart);
  }
};

export default Part;
