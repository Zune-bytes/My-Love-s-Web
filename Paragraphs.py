import tkinter as tk

class LyricPlayer:
    def __init__(self, root):
        self.root = root
        self.lyrics = [
            "How do I tell you\nI'm still paranoid\nyou'll leave?",
            "How do I tell you that\nI worry when you say\nnothing's wrong?",
            "I'm writing paragraphs\nto find the words\nto say",
            "Don't wanna upset you,\nbut I needa get this weight\noff my chest",
            "Lately you've been\nin and out of love",
            "And I've been feeling\nin and out of touch",
            "I'll keep\nyour flowers",
            "While I'm still waiting,\nplaying broken guitars\nin my room",
            "Maybe I don't think\nyou ever have to leave"
        ]
        self.index = 0
        
        self.label = tk.Label(root, text="Press SPACE to start", font=("Arial", 22, "bold"), 
                              bg="#EAE6DF", fg="#2C2C2C", wraplength=300, justify="center")
        self.label.pack(expand=True)
        
        self.root.bind('<space>', self.next_lyric)

    def next_lyric(self, event):
        if self.index < len(self.lyrics):
            self.label.config(text=self.lyrics[self.index])
            self.index += 1
        else:
            self.root.destroy()

root = tk.Tk()
root.title("Paragraphs - Luke Chiang")
root.geometry("350x350")
root.configure(bg="#EAE6DF")
root.eval('tk::PlaceWindow . center')

app = LyricPlayer(root)
root.mainloop()