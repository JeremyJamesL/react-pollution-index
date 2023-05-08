import styles from "./Table.module.scss";

function Table() {
  return (
    <div className={styles["table-container"]}>

	<table className={styles.table}>
		<thead>
			<tr>
				<th><br/></th>
				<th><br/></th>
				<th><span >SO</span><span >2</span><br/></th>
				<th><span>NO</span><span >2</span><br/></th>
				<th><span>PM</span><span >10</span><br/></th>
				<th><span>PM</span><span >2.5</span><br/></th>
				<th><span>O</span><span>3</span><br/></th>
				<th><span >CO</span><br/></th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Good&nbsp;</td>
				<td>1&nbsp;</td>
				<td>0-20</td>
				<td>0-40&nbsp;</td>
				<td>0-20&nbsp;</td>
				<td>&nbsp;0-10</td>
				<td>0-60&nbsp;</td>
				<td>0-4400&nbsp;</td>
			</tr>
			<tr>
				<td>Fair&nbsp;</td>
				<td>2</td>
				<td>&nbsp;20-80</td>
				<td>40-70&nbsp;</td>
				<td>&nbsp;20-50</td>
				<td>&nbsp;10-25</td>
				<td>60-100&nbsp;</td>
				<td>4400-9400&nbsp;</td>
			</tr>
			<tr>
				<td>Moderate&nbsp;</td>
				<td>3&nbsp;</td>
				<td>80-250&nbsp;</td>
				<td>&nbsp;70-150</td>
				<td>&nbsp;50-100</td>
				<td>&nbsp;25-50</td>
				<td>100-140</td>
				<td>&nbsp;9400-12400</td>
			</tr>
			<tr>
				<td>&nbsp;Poor</td>
				<td>4&nbsp;</td>
				<td>250-350<br/></td>
				<td>&nbsp;150-200</td>
				<td>100-200</td>
				<td>50-75&nbsp;</td>
				<td>&nbsp;140-180</td>
				<td>12400-15400</td>
			</tr>
			<tr>
				<td>&nbsp;Very Poor</td>
				<td>5&nbsp;</td>
				<td>&gt;350&nbsp;</td>
				<td>200</td>
				<td>&nbsp;&gt;200</td>
				<td>&gt;75&nbsp;</td>
				<td>&gt;180&nbsp;</td>
				<td>&nbsp;&gt;15400</td>
			</tr>
		</tbody>
	</table>
    </div>
  )
}
export default Table