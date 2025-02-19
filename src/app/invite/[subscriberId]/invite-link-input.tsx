"use client";

import { IconButton } from "@/components/icon-button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { Copy, Link as LinkIcon } from "lucide-react";

interface IInviteLinkInputProps {
  inviteLink: string;
}

export function InviteLinkInput({ inviteLink }: IInviteLinkInputProps) {
  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink);
  }

  return (
    <InputRoot>
      <InputIcon>
        <LinkIcon className="size-5" />
      </InputIcon>

      <InputField readOnly defaultValue={inviteLink} />

      <IconButton className="-mr-2">
        <Copy className="size-5" onClick={copyInviteLink} />
      </IconButton>
    </InputRoot>
  );
}
