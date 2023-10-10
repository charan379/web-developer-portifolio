/**
 * Defines the props that can be passed to a React component.
 */
interface ComponentProps {
  /**
   * An object that contains custom CSS properties for the component.
   *
   * The `style` prop is applied to the component's root element. It can be used to override any of the default CSS styles for the component.
   *
   * The `style` prop should be a valid CSS object. This means that the keys should be valid CSS property names and the values should be valid CSS values.
   *
   * For example, the following `style` prop would override the default font size for the component:
   *
   * ```typescript
   * style={{ fontSize: "20px" }}
   *
   *
   * The `style` prop can also be used to apply dynamic styles to the component. For example, the following `style` prop would change the background color of the component based on the `hovered` state:
   *
   * typescript
   * style={{ backgroundColor: hovered ? "red" : "blue" }}
   *
   */
  style?: React.CSSProperties;

  /**
   * A string that contains a custom CSS class for the component.
   *
   * The `className` prop is applied to the component's root element. It can be used to add a custom CSS class to the component.
   *
   * The `className` prop can be used to style the component in a specific way. For example, the following `className` prop would add a red border to the component:
   *
   * ```typescript
   * className="red-border"
   * ```
   *
   * The `className` prop can also be used to apply dynamic styles to the component. For example, the following `className` prop would change the background color of the component based on the `hovered` state:
   *
   * typescript
   * className={hovered ? "hovered-background" : ""}
   *
   */
  className?: string;

  /**
   * A true/false value that indicates whether to append to default classList or replace default calss with new classList string.
   *
   * For example, the following `appendDefaultClassName` prop would append a `button-active` class to the component when it is clicked:
   *
   * typescript
   * appendDefaultClassName=true
   *
   * typescript
   * appendDefaultClassName=true
   * className={hovered ? "hovered" : ""}
   */
  appendDefaultClassName?: boolean;

  /**
   * A ReactNode or array of ReactNodes that represent the content of the component.
   *
   * The `children` prop is used to pass the content of the component to it. This can be a single ReactNode, such as a string or element, or an array of ReactNodes, such as a list of elements.
   *
   * For example, the following `children` prop would pass a single string to the component:
   *
   * ```typescript
   * children="Hello, world!"
   * ```
   *
   * The following `children` prop would pass an array of elements to the component:
   *
   * ```typescript
   * children=[<div>This is the first element.</div>, <div>This is the second element.</div>]
   * ```
   */
  children?: ReactNode | undefined;
}

interface IDesignation {
  designation: string,
  startingDate: Date,
  endingDate: Date | null | undefined,
  display: boolean,
  notes: Array<{ display: boolean, priority: number, text: string }>
}

interface IExperience {
  companyName: string,
  joiningData: Date,
  relievingDate: Date | null | undefined,
  location: string,
  type: string,
  display: boolean,
  designations: IDesignation[],
}

type Profile = {
  name: string;
  shortName: string;
  displayPicture: string;
  email: string;
  mobile: Mobile[];
  skillTags: string[];
  aboutMe: string;
};

type Mobile = {
  countryCode: string;
  number: number;
  primary: boolean;
  whatsapp: boolean;
};
type Skill = {
  name: string;
  description: string;
  image: string;
};

type Project = {
  name: string;
  description: string;
  image: string;
  technologies: Array<string>;
  github: string;
  demo: string;
};
