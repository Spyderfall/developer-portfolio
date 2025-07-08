export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  date?: string; // ISO string format
  category?: string;
}

export class Project {
  private props: ProjectProps;

  constructor(props: ProjectProps) {
    this.props = props;
  }

  get id() {
    return this.props.id;
  }

  get title() {
    return this.props.title;
  }

  get description() {
    return this.props.description;
  }

  get techStack() {
    return this.props.techStack;
  }

  get liveUrl() {
    return this.props.liveUrl;
  }

  get repoUrl() {
    return this.props.repoUrl;
  }

  get date() {
    return this.props.date;
  }

  get category() {
    return this.props.category;
  }
}
