import styled from "styled-components";
import mavic2 from "../../img/mavic2.jpg";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const ColumnGroup = styled.colgroup``;

const Column = styled.col`
  width: ${(props) => props.width};
`;

const TableHead = styled.thead`
  background-color: white;
`;

const TableHeadRow = styled.tr``;

const TableHeadCell = styled.th`
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  border-top: 0.1rem solid black;
`;

const TableBody = styled.tbody`
  border-bottom: 0.1rem solid black;
`;

const TableBodyRow = styled.tr``;

const TableBodyCell = styled.td`
  padding: 10px;
  text-align: center;
`;

const TableBodyFirst = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const TableImg = styled.img`
  alt: "Product";
  width: 20rem;
  heigh: 20rem;
`;

const TableInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TableInfoContent = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  text-align: left;
`;

const TotalContext = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  align-self: flex-end;
  text-align: right;
  margin: 5rem 5.5rem;
`;

export default function CartList() {
  return (
    <>
      <Table>
        <ColumnGroup>
          <Column width="40%" />
          <Column width="20%" />
          <Column width="20%" />
          <Column width="20%" />
        </ColumnGroup>
        <TableHead>
          <TableHeadRow>
            <TableHeadCell>상품 정보</TableHeadCell>
            <TableHeadCell>주문일자</TableHeadCell>
            <TableHeadCell>주문번호</TableHeadCell>
            <TableHeadCell>수량</TableHeadCell>
          </TableHeadRow>
        </TableHead>
        <TableBody>
          <TableBodyRow>
            <TableBodyCell>
              <TableBodyFirst>
                <TableImg src={mavic2} />
                <TableInfoContainer>
                  <TableInfoContent>Matrice M600 Matrice M600</TableInfoContent>
                  <TableInfoContent>20,000원</TableInfoContent>
                  <TableInfoContent>삼성</TableInfoContent>
                </TableInfoContainer>
              </TableBodyFirst>
            </TableBodyCell>
            <TableBodyCell>2023-05-17</TableBodyCell>
            <TableBodyCell>12345678</TableBodyCell>
            <TableBodyCell>1개</TableBodyCell>
          </TableBodyRow>
        </TableBody>
      </Table>
      <TotalContext>총 800,000원</TotalContext>
    </>
  );
}
