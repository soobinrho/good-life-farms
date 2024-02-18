import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/table';
import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';

// Set up API access to Google Sheets.
// Source:
//   https://theoephraim.github.io/node-google-spreadsheet/
const googleSheetsAPIAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const doc = new GoogleSpreadsheet();

export default function PrototypePage() {
  return (
    <>
      {/* TODO: Use Google Forms API to dynamically assign a form.*/}
      <div className='relative h-max min-h-screen overflow-y-auto bg-background'>
        <Table className='mx-auto mb-14 mt-20 max-w-[95%]'>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[100px]'>Produce</TableHead>
              <TableHead>Note</TableHead>
              <TableHead>Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className='font-medium'>
                <a
                  className='w-max rounded-md bg-primary/75 px-4 py-2 text-lg text-primary-4 drop-shadow-[0_8px_8px_rgba(0,0,0,0.3)] transition-colors hover:bg-primary-3/90 focus-visible:ring-1 active:ring-2 disabled:pointer-events-none disabled:opacity-50'
                  target='_blank'
                  href={googleForms_order + 'Onion'}
                  el='noopener noreferrer'
                >
                  Onion
                </a>
              </TableCell>
              <TableCell>
                30 available. (Last updated: 2024-02-18 23:11)
              </TableCell>
              <TableCell>$0.93 per EA</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>
                <a
                  className='w-max whitespace-nowrap rounded-md bg-primary/75 px-4 py-2 text-lg text-primary-4 drop-shadow-[0_8px_8px_rgba(0,0,0,0.3)] transition-colors hover:bg-primary-3/90 focus-visible:ring-1 active:ring-2 disabled:pointer-events-none disabled:opacity-50'
                  target='_blank'
                  href={googleForms_order + 'Cucumber'}
                  rel='noopener noreferrer'
                >
                  Cucumber
                </a>
              </TableCell>
              <TableCell>
                15 available. (Last updated: 2024-02-18 05:52)
              </TableCell>
              <TableCell>$1.98 per EA</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
