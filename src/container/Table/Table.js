import React, { Component } from "react";
import "react-table/react-table.css";
import "./Table.css";
import ReactTable, { ReactTableDefaults } from "react-table";

class Table extends Component {
    render() {
        const columnDefaults = {
            ...ReactTableDefaults.column,
            headerClassName: "wordwrap"
        };
        return (
            <ReactTable
                filterable
                defaultFilterMethod={this.props.defaultFilterMethod}
                data={this.props.data}
                columns={this.props.columns}
                column={columnDefaults}
                style={{
                    height: "800px" // This will force the table body to overflow and scroll, since there is not enough room
                }}
                className="-striped -highlight pa3"
                getTdProps={(state, rowInfo, column, instance) => {
                    return {
                        onClick: (e, handleOriginal) => {
                            {
                                rowInfo.row.clicked = true;
                                handleOriginal;
                            }

                            // IMPORTANT! React-Table uses onClick internally to trigger
                            // events like expanding SubComponents and pivots.
                            // By default a custom 'onClick' handler will override this functionality.
                            // If you want to fire the original onClick handler, call the
                            // 'handleOriginal' function.
                        }
                    };
                }}
            />
        );
    }
}

export default Table;
