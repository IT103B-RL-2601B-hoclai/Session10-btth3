let borrowRecords = [
  { recordId: "PM01", studentId: "SV101", bookTitle: "Cấu trúc dữ liệu & Giải thuật", borrowDays: 10, isReturned: false },
  { recordId: "PM02", studentId: "SV102", bookTitle: "Lập trình Web hiện đại", borrowDays: 16, isReturned: false },
  { recordId: "PM03", studentId: "SV103", bookTitle: "Cơ sở dữ liệu nâng cao", borrowDays: 20, isReturned: false }
];

console.log("Danh sách phiếu mượn ban đầu:");
console.table(borrowRecords);

//Thêm mới (Create): Thêm phiếu PM04 cho sinh viên SV104 mượn Clean Code trong 18 ngày
borrowRecords.push({
  recordId: "PM04",
  studentId: "SV104",
  bookTitle: "Clean Code",
  borrowDays: 18,
  isReturned: false
});

console.log("Danh sách sau khi thêm phiếu PM04:");
console.table(borrowRecords);

//Phạt quá hạn (Read): Duyệt mảng tính phí phạt cho các phiếu mượn quá 14 ngày
console.log("Báo cáo kiểm tra hạn mượn và tính phí phạt:");
for (let i = 0; i < borrowRecords.length; i++) {
  const record = borrowRecords[i];
  const MAX_ALLOWED_DAYS = 14;
  const FINE_PER_DAY = 5000;

  if (record.borrowDays > MAX_ALLOWED_DAYS) {
    const overdueDays = record.borrowDays - MAX_ALLOWED_DAYS;
    const fineAmount = overdueDays * FINE_PER_DAY;
    console.log("Phiếu " + record.recordId + " (SV: " + record.studentId + ") quá hạn " + overdueDays + " ngày. Tiền phạt: " + fineAmount.toLocaleString("vi-VN") + " VNĐ");
  } else {
    console.log("Phiếu " + record.recordId + " (SV: " + record.studentId + ") trong hạn mượn.");
  }
}

//Cập nhật (Update): Phiếu PM01 trả sách, chuyển isReturned = true
for (let i = 0; i < borrowRecords.length; i++) {
  if (borrowRecords[i].recordId === "PM01") {
    borrowRecords[i].isReturned = true;
    console.log("Đã cập nhật trạng thái trả sách cho phiếu: " + borrowRecords[i].recordId);
    break;
  }
}

//Xóa (Delete): Xóa phiếu PM03 khỏi danh sách sau khi tất toán
for (let i = 0; i < borrowRecords.length; i++) {
  if (borrowRecords[i].recordId === "PM03") {
    borrowRecords.splice(i, 1);
    console.log("Đã xóa phiếu mượn đã tất toán: PM03");
    break;
  }
}

console.log("Danh sách phiếu mượn tổng kết cuối cùng:");
console.table(borrowRecords);