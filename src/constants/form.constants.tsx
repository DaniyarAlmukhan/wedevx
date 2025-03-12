import { formatIs, rankWith, scopeEndsWith, uiTypeIs } from "@jsonforms/core"
import { materialRenderers } from "@jsonforms/material-renderers"
import FileUploadRenderer from "../components/form/file-upload.renderer"
import CustomLabelRenderer from "@/components/form/custom-label.renderer"
import TextAreaRenderer from "@/components/form/text-area.renderer"

export const schema = {
  type: "object",
  required: ["name", "surname", "email", "fileUpload"],
  properties: {
    name: { type: "string", minLength: 2, title: "First Name" },
    surname: { type: "string", minLength: 2, title: "Last Name" },
    email: { type: "string", format: "email", title: "Email Address" },
    linkedIn: { type: "string", format: "uri", title: "LinkedIn Profile" },
    visas: {
      type: "array",
      items: {
        type: "string",
        enum: ["O-1", "EB-1A", "EB-2 NIW", "I don't know"],
      },
      title: "",
      uniqueItems: true,
    },
    fileUpload: { type: "string", contentMediaTyle: "application/pdf", title: "Resume/CV (PDF)" },
    additionalInfo: { type: "string", title: "Additional Information", format: "textarea" },
  },
}

export const uiSchema = {
  type: "VerticalLayout",
  elements: [
    { type: "Control", scope: "#/properties/name" },
    { type: "Control", scope: "#/properties/surname" },
    { type: "Control", scope: "#/properties/email" },
    { type: "Control", scope: "#/properties/linkedIn" },
    {
      type: "Label",
      text: "Select your visa preferences:",
      options: { classNames: "custom-label", labelType: "visa" }
    },
    { type: "Control", scope: "#/properties/visas", options: { multi: true, layout: "columns", classNames: "custom-checkbox-container" } },
    { type: "Control", scope: "#/properties/fileUpload", options: { accept: ".pdf", fileUpload: true } },
    {
      type: "Label",
      text: "How can we help you?",
      options: { classNames: "custom-label", labelType: "additional" }
    },
    { type: "Control", scope: "#/properties/additionalInfo", options: { multi: true, rows: 5 } },
  ]
}

export const renderers = [
  ...materialRenderers,
  { tester: rankWith(3, scopeEndsWith("fileUpload")), renderer: FileUploadRenderer },
  { tester: rankWith(3, uiTypeIs("Label")), renderer: CustomLabelRenderer },
  { tester: rankWith(5, formatIs("textarea")), renderer: TextAreaRenderer },
]

export const loginSchema = {
  type: "object",
  required: ["username", "password"],
  properties: {
    username: { type: "string", title: "Username", pattern: "^[^\\s]+$", },
    password: { type: "string", title: "Password", pattern: "^[^\\s]+$", },
  },
}

export const loginUiSchema = {
  type: "VerticalLayout",
  elements: [
    { type: "Control", scope: "#/properties/username" },
    { type: "Control", scope: "#/properties/password" },
  ]
}