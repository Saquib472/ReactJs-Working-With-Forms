export default function ContextMenu({
  menuPosition,
  setExpenses,
  expenseId,
  setMenuPosition,
  setExpense,
  editedItem,
  setIsEditingRow
}) {
  if (!menuPosition.left) return;
  return (
    <div className="context-menu" style={menuPosition}>
      <div
        onClick={() => {
          setExpense(editedItem);
          setIsEditingRow(true)
          setMenuPosition({});
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setExpenses((prevState) =>
            prevState.filter((expense) => expense.id !== expenseId)
          );
          setMenuPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
}
