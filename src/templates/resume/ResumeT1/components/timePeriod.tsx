import React from 'react'

interface TimePeriodProps extends ComponentProps {
    fromYear: Date | null | undefined;
    toYear?: Date | null | undefined;
}

const TimePeriod: React.FC<TimePeriodProps> = (props) => {

    const { fromYear, toYear, className, appendDefaultClassName = true, style } = props;
    return (
        <span className={appendDefaultClassName
            ? // Append to default class
            ["text-[10px] sm:text-sm md:text-lg min-w-max sm:font-bold", className].join(" ")
            : // Replace default class with new class
            className}
            style={style}>
            {fromYear?.getFullYear()} - {toYear?.getFullYear() ?? "Present"}
        </span>
    )
}

export default TimePeriod