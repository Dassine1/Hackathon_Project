download_options= {"Windows" : [] ,
                "Mac": [] ,
                "Linux" : [],
                "Others" : []}

class Options:
    def __init__(self, doc_link, origin_link,  download_options):
        self.doc_link = doc_link
        self.download_options = download_options

    def get_doc_link(self) -> str:
        return "https://docs.github.com/fr"

    def get_origin_link(self) -> str:
        return "https://github.com/new"
        

    def get_os_options(self):
        self.os = download_options.keys()
        return download_options.get(self.os)
