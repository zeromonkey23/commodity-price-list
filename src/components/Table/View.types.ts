export interface TableProps {
  data: Array<Record<string, unknown>>;
  columns: Array<TableColumn>;
  page?: number;
  pageSize?: number;
  onPageChange?: (page: number) => void;
  onQuickPageChange?: (page: number) => void;
  onPageSizeChange?: (page: number) => void;
  onFilterChange?: (filter: Record<string, string>) => void;
}

export interface TableColumn {
  name: string;
  dataKey: string;
  dataType: 'string' | 'number' | 'date' | 'currency';
  width?: string;
  filterKey?: string;
  filterType?: 'text' | 'dropdown' | 'date'  | null;
  filterOption?: Array<DropdownOption>;
  filterPlaceholder?: string;
}

export interface TableHooksProps {
  onFilterChange?: (filter: Record<string, string>) => void;
}

export interface DropdownOption {
  name: string,
  value: string
}