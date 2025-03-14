import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  type: string;
  id?: string;
  value?: any;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  placeHolder?: string;
  header: string;
  name?: string;
  iconTwo?: React.ReactNode;
  iconThree?: React.ReactNode;
  width?: string;
  height?: string;
  pl?: string | 3;
  borders: string | "1px solid gray";
  Display?: "flex" | "block";
}
export const Input: React.FC<InputProps> = (props) => {
  return (
    <div
      className="font-sans font-[400] text-[0.88rem] mt-[1%] items-center max-md:flex-wrap"
      style={{ display: props.Display }}
    >
      <h1
        className={
          " h-[26px] text-textColor font-[500] w-fit min-w-[15%]  text-[0.877rem]  dark:text-primary max-md:text-[0.875rem] font-sans "
        }
      >
        {props.header}
      </h1>

      <div className=" relative  w-[100%]">
        <span
          className={` absolute inset-y-0 left-0 pl-3 pt-[12px] flex items-center text-textColor `}
        >
          {props.icon}
        </span>
        <input
          type={props.type}
          name={props.name}
          id={props.id}
          value={props.value}
          onChange={props.handleInput}
          style={{
            height: props.height,
            paddingLeft: props.pl,
            border: props.borders,
          }}
          className={`w-[${props.width}] max-lg:w-[100%] h-[40px] border-[0.3px] rounded-md text-black font-sans font-[400] text-[0.88rem] 
    focus:outline focus:outline-[1px] focus:outline-primarybrandColor 
    max-md:text-[0.875rem] pl-[12px] max-sm:w-[100%]`}
          placeholder={props.placeHolder}
        />

        <>{props.iconTwo}</>
      </div>
    </div>
  );
};

interface CustomInputProps {
  label: string;
  name: string;
  register: UseFormRegisterReturn;
  error?: string;
  type?: string;
  placeholder?: string;
}

export const CustomeInput: React.FC<CustomInputProps> = ({
  label,
  name,
  register,
  error,
  type = "text",
  placeholder,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        {...register}
        className={`w-[100%] h-[40px] border-[0.3px] rounded-md text-black font-sans font-[400] text-[0.88rem] 
            focus:outline focus:outline-[1px] focus:outline-primarybrandColor 
            max-md:text-[0.875rem] pl-[12px] max-sm:w-[100%]`}
        style={{
          border: error ? "1px solid #930a0a" : undefined,
        }}
        placeholder={placeholder}
      />
      {error && <p className="text-[#930a0a]">{error}</p>}
    </div>
  );
};

interface CustomSelectProps {
  label: string;
  name: string;
  register: UseFormRegisterReturn;
  error?: string;
  options: { value: string; lable: string }[];
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  name,
  register,
  error,
  options,
}) => {
  return (
    <div className="w-[100%] mt-[10px]">
      <label className="font-[500] text-[0.9rem] mb-1 block">{label}</label>
      <select
        {...register}
        className={`w-full h-[40px] px-3 border ${
          error ? "border-[#930a0a]" : "border-gray-300"
        } rounded-[8px]`}
        id={name}
      >
        <option value="">-- Select {label} --</option>
        {options.map((option, index) => (
          <option key={index} value={option?.value}>
            {option?.lable}
          </option>
        ))}
      </select>
      {error && <p className="text-[#930a0a]">{error}</p>}
    </div>
  );
};
