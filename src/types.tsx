export interface CoursePartDescription {
  description?: string;
}

export interface CoursePartBase extends CoursePartDescription {
  name: string;
  exerciseCount: number;
}

export interface CoursePartBasic extends CoursePartBase {
  kind: "basic"
}

export interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group"
}

export interface CoursePartBackground extends CoursePartBase {
  backgroundMaterial: string;
  kind: "background"
}

export interface  CoursePartSpecial extends CoursePartBase {
  requirements: Array<string>
  kind: "special"
}

export type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground | CoursePartSpecial;
