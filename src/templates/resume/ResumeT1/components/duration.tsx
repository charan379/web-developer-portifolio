import Text from '@/components/Text';
import getNumberOfYearsAndMonthsBetweenDates from '@/lib/utils/getNumberOfYearsAndMonthsBetweenDates';
import React from 'react'

interface DurationProps extends ComponentProps {
    fromYear: Date | null | undefined;
    toYear?: Date | null | undefined;
}

const Duration: React.FC<DurationProps> = (props) => {

    const { fromYear, toYear, className } = props;
    const { years, months } = getNumberOfYearsAndMonthsBetweenDates(fromYear ?? new Date(Date.now()), toYear ?? new Date(Date.now()))

    return (
        <Text className={["font-roboto400 tracking-wide", className].join(" ")} appendDefaultClassName={true}>
            {`${years} ${years > 1 ? "years" : "year"}, ${months} ${months === 1 ? "month" : "months"}`}
        </Text>
    )
}

export default Duration