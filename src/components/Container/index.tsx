import { Body } from "./styles";

import { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren<{}>) {
	return <Body>{children}</Body>;
}
