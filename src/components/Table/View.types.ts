export interface TableProps {
  data: Array<Record<string, unknown>>;
  columns: Array<TableColumn>;
}

export interface TableColumn {
  name: string;
  dataKey: string;
  dataType: 'string' | 'number' | 'date' | 'currency';
  width?: string;
}