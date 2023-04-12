import { ReactNode } from "react"

export type ProfileMenuProps = {
    children: ReactNode,
    anchorEl: HTMLElement | null,
    isOpen: boolean,
    handleClose: ()=>void,
}