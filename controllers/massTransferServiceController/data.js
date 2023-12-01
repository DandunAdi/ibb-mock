module.exports = {
  /* -------------------------- deletingMassTransfer -------------------------- */
  deletingMassTransfer: {
    isSuccess: true,
  },

  /* ----------------------------- inquiryAccount ----------------------------- */
  inquiryAccount: {
    fileName: "payroll-bank-jasa-jakarta.xlsx",
    itemPayrollDtoList: [
      {
        accountNumber: "12345678900",
        amount: "10000000",
        email: "nasabah_a@gmail.com",
        recipientName: "Nasabah A",
        status: "",
        statusSummaryUploadPayroll: "VALID",
        transactionDescription: "TRANSFER_PAYROLL",
      },
    ],
    message: "",
    parsedExcelRes: {
      fileName: "payroll-bank-jasa-jakarta.xlsx",
      isSuccess: true,
      itemPayrollDtoList: [
        {
          accountNumber: "12345678900",
          amount: "10000000",
          email: "nasabah_a@gmail.com",
          recipientName: "Nasabah A",
          status: "",
          statusSummaryUploadPayroll: "VALID",
          transactionDescription: "TRANSFER_PAYROLL",
        },
      ],
      items: [
        {
          accountNumber: "12345678900",
          amount: 10000000,
          bankCode: "472",
          citizens: "INDONESIAN",
          email: "nasabah_a@gmail.com",
          executionDate: "2023-12-01T04:48:03.466Z",
          recipientName: "Nasabah A",
          recipientType: 0,
          statusSummaryUploadPayroll: "VALID",
          transactionCategory: "TRANSFER_PAYROLL",
          transactionDescription: "TRANSFER_PAYROLL",
        },
      ],
      summaryUploadPayroll: {
        createdDate: "2023-12-01T04:48:03.466Z",
        duplicate: 0,
        notValid: 0,
        numberOfRecordPayroll: 0,
        successUpload: 0,
        totalAmount: 10000000,
        valid: 0,
      },
    },
  },
};
