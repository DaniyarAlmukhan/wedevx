import { withJsonFormsLabelProps } from "@jsonforms/react";
import { LabelProps, UISchemaElement } from "@jsonforms/core";
import { Dices, Heart, Info } from "lucide-react";
import { LabelContainer } from "@/components/form/form.styles";
import { useTranslations } from "next-intl";

const iconMap = {
  visa: Dices,
  additional: Heart,
  default: Info,
};

const textMap = {
  visa: "visa",
  additional: "additional",
  default: "default",
};

type LabelType = keyof typeof iconMap;

const CustomLabelRenderer = ({ visible, uischema }: LabelProps) => {
  const t = useTranslations();
  if (!visible) return null;

  const options = (uischema as UISchemaElement)?.options || {};
  const labelType: LabelType = options.labelType ?? "default";
  const IconComponent = iconMap[labelType] ?? iconMap.default;
  const customText = textMap[labelType] ?? textMap.default;

  return (
    <LabelContainer>
      <div className="heading">
        <IconComponent size={60} data-testid={`${labelType}-icon`} />
        <div className="title">{t('form.' + customText)}</div>
      </div>
    </LabelContainer>
  );
};

export default withJsonFormsLabelProps(CustomLabelRenderer);
