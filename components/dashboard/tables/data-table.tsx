"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Column<T> {
  header: string;
  accessor: keyof T;
  cell?: (value: any) => React.ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
}

export function DataTable<T>({ data, columns }: DataTableProps<T>) {
  return (
    <div className="rounded-lg border border-border/40 bg-secondary/50 backdrop-blur-sm">
      <Table>
        <TableHeader>
          <TableRow className="border-border/40 hover:bg-secondary/70">
            {columns.map((column) => (
              <TableHead key={String(column.accessor)} className="text-muted-foreground">
                {column.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} className="border-border/40 hover:bg-secondary/70">
              {columns.map((column) => (
                <TableCell key={String(column.accessor)}>
                  {column.cell 
                    ? column.cell(row[column.accessor])
                    : row[column.accessor] as React.ReactNode}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}