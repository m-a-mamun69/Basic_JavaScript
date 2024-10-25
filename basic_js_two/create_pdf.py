# First Step
# pip install reportlab

from reportlab.pdfgen import canvas

# create a New PDF file
pdf_file = canvas.Canvas("example.pdf")

# add text to the PDF file
pdf_file.drawString(72, 720, "Hello, World!")
pdf_file.drawString(72, 700, "Free PDF Document ")
pdf_file.drawString(72, 680, "Like | Share ")
pdf_file.drawString(72, 660, "Subscribe ")
pdf_file.drawString(72, 640, "mCode.com ")

# Save the PDF file
pdf_file.save()