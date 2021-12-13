import styled, { CSSProperties } from "styled-components";
import { getHorizontalGap, getVerticalGap } from "../../styles";
import Select from "react-select";
import Icon from "../Icon/Icon";
import IconOption from "../Select/IconOption";
import ValueOption from "../Select/ValueOption";
import { ChainId } from "../../enums";

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  ${getHorizontalGap("20px")};
  padding: 10px 10px 15px 10px;
`;

const TransferChainContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${getVerticalGap("5px")};
  width: 100%;
`;

const StyledSelect = styled(Select)`
  width: 100%;
`;

const TransferLabel = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.paragraph.lg};
  color: ${({ theme }) => theme.secondaryColor};
`;

const TransferArrowContainer = styled.div`
  display: flex;
  align-items: center;
`;

const IconArrowRight = styled(Icon)`
  margin-top: 20px;
  height: 25px;
  width: 25px;
`;

const customStyles: any = {
  control: (provided: CSSProperties, state: any) => ({
    ...provided,
    borderRadius: "10px",
  }),
};

type Props = {
  chainFrom: number;
  chainTo: number;
  onSelectChainFrom: (option: any) => void;
  onSelectChainTo: (option: any) => void;
};
const TransferChainSelects = ({
  chainFrom,
  chainTo,
  onSelectChainFrom,
  onSelectChainTo,
}: Props) => {
  const chainsFrom = [
    {
      label: "Goerli",
      value: 5,
      icon: <Icon name="ethereum" size="20px" />,
    },
    {
      label: "Polygon mumbai",
      value: 80001,
      icon: <Icon name="polygon" size="20px" />,
    },
  ];
  const chainsTo = [
    // {
    //   label: "Ethereum",
    //   value: "0",
    //   icon: <Icon name="ethereum" size="20px" />,
    // },
    {
      label: "Polygon mumbai",
      value: 80001,
      icon: <Icon name="polygon" size="20px" />,
    },
  ];

  return (
    <Root>
      <TransferChainContainer>
        <TransferLabel>Transfer from</TransferLabel>
        <StyledSelect
          value={chainsFrom.find((option) => option.value === chainFrom) || null}
          styles={customStyles}
          options={chainsFrom}
          placeholder={null}
          onChange={onSelectChainFrom}
          components={{ Option: IconOption, SingleValue: ValueOption }}
        />
      </TransferChainContainer>
      <TransferArrowContainer>
        <IconArrowRight name="arrowRight" />
      </TransferArrowContainer>
      <TransferChainContainer>
        <TransferLabel>Transfer to</TransferLabel>
        <StyledSelect
          value={chainsTo.find((option) => option.value === chainTo) || null}
          styles={customStyles}
          options={chainsTo}
          placeholder={null}
          onChange={onSelectChainTo}
          components={{ Option: IconOption, SingleValue: ValueOption }}
        />
      </TransferChainContainer>
    </Root>
  );
};

export default TransferChainSelects;
