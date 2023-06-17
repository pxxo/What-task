#! /usr/bin/python3

import time
import tkinter as tk
from tkinter import filedialog
from PIL import Image, ImageGrab, ImageTk

img = None
pimg = None
drawid = None


def capture():

    global img, pimg, drawid
    # x = canvas.winfo_rootx()  # canvas.winfo_x() は加算不要でした
    # y = canvas.winfo_rooty()  # canvas.winfo_y() は加算不要でした
    # w = canvas.winfo_width()
    # h = canvas.winfo_height()

    x = 879
    y = 149
    w = 64
    h = 62

    geo = root.wm_geometry()
    root.withdraw()
    time.sleep(0.1)
    img = ImageGrab.grab(bbox=(x, y, x+w, y+h))
    root.deiconify()
    root.wm_geometry(geo)
    if drawid != None:
        canvas.delete(drawid)
        pimg = None
        drawid = None
    pimg = ImageTk.PhotoImage(image=img)
    drawid = canvas.create_image(
        w//2, h//2,
        image=pimg
    )
    save()


i = 520


def save():
    global i
    i = i + 1
    print(i)
    img.save("itemimg" + str(i) + ".gif")


root = tk.Tk()
root.geometry("200x200")
frame = tk.Frame(root)
captbtn = tk.Button(frame, text='Capture', command=capture)
savebtn = tk.Button(frame, text='Save', command=save)
captbtn.pack(side='left')
savebtn.pack(side='left')
frame.pack()
canvas = tk.Canvas(root, bg='black', width=1920, height=1080)
canvas.pack()

root.mainloop()
