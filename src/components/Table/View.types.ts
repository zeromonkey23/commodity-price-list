export interface TableProps {
  data: Array<Record<string, unknown>>;
  columns: Array<TableColumn>;
  page?: number;
  onPageChange?: (page: number) => void;
}

export interface TableColumn {
  name: string;
  dataKey: string;
  dataType: 'string' | 'number' | 'date' | 'currency';
  width?: string;
  filterKey?: string;
  filterType?: 'text' | 'dropdown' | 'date' | 'statusDropdown' | null;
  filterOption?: Array<Record<string, unknown>>;
}