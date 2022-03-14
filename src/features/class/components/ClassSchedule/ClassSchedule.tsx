import {
	Table,
	TableWrapper,
	Thead,
	TBody,
	TH,
	THNoBorder,
	TD,
	TDLight,
} from './ClassSchedule.styles';

const ClassSchedule = () => (
	<TableWrapper>
		<Table>
			<Thead>
				<tr>
					<TH>Godzina</TH>
					<TH>Poniedziałek</TH>
					<TH>Wtorek</TH>
					<TH>Środa</TH>
					<TH>Czwartek</TH>
					<THNoBorder>Piątek</THNoBorder>
				</tr>
			</Thead>
			<TBody>
				<tr>
					<TDLight className="p-4 py-2 border-2 bg-slate-100">
						7:30-8:15
					</TDLight>
					<TD className="p-4 py-2 border-2" rowSpan={2}>
						His
					</TD>
					<TDLight className="p-4 py-2 border-2 bg-slate-100" />
					<TDLight className="p-4 py-2 border-2 bg-slate-100" />
					<TDLight className="p-4 py-2 border-2 bg-slate-100" />
					<TD className="p-4 py-2 border-2" rowSpan={2}>
						Angielski 2gr
					</TD>
				</tr>
				<tr>
					<TDLight className="p-4 py-2 border-2 bg-slate-100">
						8:20-9:05
					</TDLight>
					<TD className="p-4 py-2 border-2">Religia</TD>
					<TD className="p-4 py-2 border-2">Religia</TD>
					<TD className="p-4 py-2 border-2">Fizyka</TD>
				</tr>
				<tr>
					<TDLight className="p-4 py-2 border-2 bg-slate-100">
						9:10-9:55
					</TDLight>
					<TD className="p-4 py-2 border-2">Matematyka</TD>
					<TD className="p-4 py-2 border-2" rowSpan={2}>
						Fizyka
					</TD>
					<TD className="p-4 py-2 border-2">Fizyka</TD>
					<TD className="p-4 py-2 border-2" rowSpan={2}>
						Matematyka
					</TD>
					<TD className="p-4 py-2 border-2" rowSpan={2}>
						Fizyka
					</TD>
				</tr>
				<tr>
					<TDLight className="p-4 py-2 border-2 bg-slate-100">
						10:05 - 10:50
					</TDLight>
					<TD className="p-4 py-2 border-2" rowSpan={3}>
						Wf
					</TD>
					<TD className="p-4 py-2 border-2" rowSpan={2}>
						His
					</TD>
				</tr>
				<tr>
					<TDLight className="p-4 py-2 border-2 bg-slate-100">
						10:55 - 11:40
					</TDLight>
					<TD className="p-4 py-2 border-2" rowSpan={2}>
						Matematyka
					</TD>
					<TD className="p-4 py-2 border-2" rowSpan={2}>
						Angielski gr2
					</TD>
					<TD className="p-4 py-2 border-2" rowSpan={2}>
						Matematyka
					</TD>
				</tr>
				<tr>
					<TDLight className="p-4 py-2 border-2 bg-slate-100">
						11:45 - 12:30
					</TDLight>
					<TD className="p-4 py-2 border-2" rowSpan={2}>
						Polski
					</TD>
				</tr>
				<tr className="">
					<TDLight className="p-4 py-2 border-2 bg-slate-100">
						12:35 - 13:20
					</TDLight>
					<TD className="p-4 py-2 border-2">
						Niemiecki gr1 &amp; gr2
					</TD>
					<TD className="p-4 py-2 border-2" rowSpan={2}>
						Polski
					</TD>
					<TDLight className="p-4 py-2 border-2 bg-slate-100" />
					<TDLight className="p-4 py-2 border-2 bg-slate-100" />
				</tr>
				<tr>
					<TDLight className="p-4 py-2 border-2 bg-slate-100">
						13:40 - 14:25
					</TDLight>
					<TD className="p-4 py-2 border-2">Angielski gr1</TD>
					<TD className="p-4 py-2 border-2">Wychowawcza</TD>
					<TDLight className="p-4 py-2 border-2 bg-slate-100" />
					<TDLight className="p-4 py-2 border-2 bg-slate-100" />
				</tr>
				<tr>
					<TDLight className="p-4 py-2 border-2 bg-slate-100">
						14:30 - 15:15
					</TDLight>
					<TD className="p-4 py-2 border-2">Angielski gr1</TD>
					<TD className="p-4 py-2 border-2">Niemiecki</TD>
					<TD className="p-4 py-2 border-2" rowSpan={2}>
						Angielski gr1
					</TD>
					<TDLight className="p-4 py-2 border-2 bg-slate-100" />
					<TDLight className="p-4 py-2 border-2 bg-slate-100" />
				</tr>
				<tr>
					<TD className="p-4 py-2 border-2 bg-slate-100">
						15:25 - 16:10
					</TD>
					<TDLight className="p-4 py-2 border-2 bg-slate-100" />
					<TDLight className="p-4 py-2 border-2 bg-slate-100" />
					<TDLight className="p-4 py-2 border-2 bg-slate-100" />
					<TDLight className="p-4 py-2 border-2 bg-slate-100" />
				</tr>
			</TBody>
		</Table>
	</TableWrapper>
);

export default ClassSchedule;
