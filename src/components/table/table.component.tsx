import { statuses, tableHeaders } from "@/constants/table.constants";
import { Pagination, StyledTable, TableFilters, TableWrapper } from "./table.styles";
import { useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { ILead } from "@/interfaces/types";
import { formatDate } from "@/helpers/utils";
import { useTranslations } from "next-intl";
import { ArrowDown, ArrowUp } from "lucide-react";
import Button from "../button/button.component";

const PAGE_SIZE = 10;

interface ITableProps {
  onButtonClick?: (lead: ILead) => void;
}

export default function Table({ onButtonClick }: ITableProps) {
  const t = useTranslations();
  const [selectedStatus, setSelectedStatus] = useState<string>('');
  const [query, setQuery] = useState<string>('');
  const [filteredLeads, setFilteredLeads] = useState<ILead[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const debouncedQuery = useDebounce(query, 500);
  const leads = useSelector((state: RootState) => state.leads.leads);
  const totalPages = Math.ceil(filteredLeads.length / PAGE_SIZE);
  const displayedLeads = filteredLeads.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const getPageNumbers = () => {
    const pages = [];
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  const getSortArrow = (column: string) => {
    if (sortColumn === column) {
      return sortOrder === 'asc' ? <ArrowUp /> : <ArrowDown />;
    }
    return <ArrowDown />;
  };

  useEffect(() => {
    const res = leads.filter((lead) => `${lead.name} ${lead.surname}`.toLowerCase().includes(debouncedQuery.toLowerCase()) && lead.status.includes(selectedStatus));

    if (sortColumn) {
      res.sort((a, b) => {
        const valueA = a[sortColumn as keyof ILead];
        const valueB = b[sortColumn as keyof ILead];

        if (typeof valueA === 'string' && typeof valueB === 'string') {
          return sortOrder === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
        }
        if (typeof valueA === 'number' && typeof valueB === 'number') {
          return sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
        }
        return 0;
      });
    }

    setFilteredLeads(res);
    setCurrentPage(1);
  }, [debouncedQuery, selectedStatus, leads, sortColumn, sortOrder]);

  return (
    <TableWrapper>
      <TableFilters>
        <input type="text" placeholder="Search" value={query} onChange={e => setQuery(e.target.value)} />

        <select name="status" id="status" value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
          <option value="">{t('leads.status')}</option>
          {statuses.map((status: string) => (
            <option key={status} value={status} >{t('leads.' + status)}</option>
          ))}
        </select>
      </TableFilters>

      <StyledTable>
        <thead>
          <tr>
            {tableHeaders.map(header => (
              <th key={header} onClick={() => handleSort(header)}>
                <div className="th">
                  {t('leads.' + header)} {getSortArrow(header)}
                </div>
              </th>
            ))}
            {onButtonClick && <th></th>}
          </tr>
        </thead>

        <tbody>
          {displayedLeads.map((lead: ILead) => (
            <tr key={lead.id}>
              <td>{lead.name} {lead.surname}</td>
              <td>{formatDate(lead.submitted)}</td>
              <td>{t('leads.' + lead.status)}</td>
              <td>{lead.email}</td>
              {onButtonClick && <td>
                <Button onClick={() => onButtonClick(lead)}>
                  {t('action.view')}
                </Button>
              </td>}
            </tr>
          ))}
        </tbody>
      </StyledTable>

      {
        totalPages > 1 &&
        <Pagination>
          <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
            {'<'}
          </button>
          {getPageNumbers().map((page) => (
            <button key={page} onClick={() => setCurrentPage(page)} className={page === currentPage ? "active" : ""}>
              {page}
            </button>
          ))}

          <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
            {'>'}
          </button>
        </Pagination>
      }
    </TableWrapper>
  );
}