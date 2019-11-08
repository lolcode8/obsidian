import R from "ramda";

export const currentDateTimeInUTC = R.always(new Date().getTime());
