import { Box, Text } from "@chakra-ui/layout";
import { useState } from "react";
import { zonedTimeToUtc } from "date-fns-tz";
import { Button } from "@chakra-ui/button";

export const Agenda: React.FC = () => {
    const date = "2014-06-25 10:00:00";
    const [timeZone, setTimeZone] = useState("America/Los_Angeles");
    const utcDate = zonedTimeToUtc(date, timeZone).toISOString(); // In June 10am in Los Angeles is 5pm UTC

    console.log(utcDate);
    return (
        <Box>
            <Button>Select Berlin Time Zone</Button>
            <Text>Your current time zone is: {timeZone}</Text>
            <Text>{utcDate}</Text>
        </Box>
    );
};
