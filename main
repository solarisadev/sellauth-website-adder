import tkinter as tk
from tkinter import messagebox, filedialog
import requests

def submit_theme():
    token = token_entry.get()
    theme = theme_var.get()
    name = name_entry.get()
    
    if not token or not theme or not name:
        messagebox.showerror("Error", "All fields are required!")
        return
    
    if theme not in ["glow", "glitch"]:
        messagebox.showerror("Error", "Invalid theme! Only 'glow' and 'glitch' are allowed.")
        return
    
    url = "https://api-internal.sellauth.com/v1/shops/95792/themes"
    headers = {
        "accept": "application/json",
        "authorization": f"Bearer {token}",
        "content-type": "application/json",
        "origin": "https://dash.sellauth.com",
    }
    data = {
        "name": name,
        "description": "",
        "template": theme
    }
    
    response = requests.post(url, json=data, headers=headers)
    
    if response.status_code == 200:
        messagebox.showinfo("Success", "Theme uploaded successfully!")
    else:
        messagebox.showerror("Error", f"Failed to upload theme: {response.text}")

def upload_theme_file():
    token = token_entry.get()
    if not token:
        messagebox.showerror("Error", "Token is required!")
        return
    
    file_path = filedialog.askopenfilename(filetypes=[("Theme Files", "*.json")])
    if not file_path:
        return
    
    with open(file_path, "r") as file:
        theme_data = file.read()
    
    url = "https://api-internal.sellauth.com/v1/shops/95792/themes"
    headers = {
        "accept": "application/json",
        "authorization": f"Bearer {token}",
        "content-type": "application/json",
        "origin": "https://dash.sellauth.com",
    }
    
    response = requests.post(url, data=theme_data, headers=headers)
    
    if response.status_code == 200:
        messagebox.showinfo("Success", "Theme file uploaded successfully!")
    else:
        messagebox.showerror("Error", f"Failed to upload theme file: {response.text}")

# GUI Setup
root = tk.Tk()
root.title("Theme Uploader")
root.geometry("300x250")

tk.Label(root, text="Enter Token:").pack()
token_entry = tk.Entry(root, width=40)
token_entry.pack()

tk.Label(root, text="Select Theme:").pack()
theme_var = tk.StringVar()
theme_menu = tk.OptionMenu(root, theme_var, "glow", "glitch")
theme_menu.pack()

tk.Label(root, text="Theme Name:").pack()
name_entry = tk.Entry(root, width=40)
name_entry.pack()

tk.Button(root, text="Submit", command=submit_theme).pack()
tk.Button(root, text="Upload Theme File", command=upload_theme_file).pack()

root.mainloop()
