Vim�UnDo� m\AZ�e��}=���b�?-0��p��l,      from bs4 import BeautifulSoup            1       1   1   1    \�/�    _�                            ����                                                                                                                                                                                                                                                                                                                                                             \�+�     �               # specify the url5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             \�+�    �                    7quote_page = ‘http://www.bloomberg.com/quote/SPX:IND'�      	          7quote_page = ‘http://www.bloomberg.com/quote/SPX:IND'5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             \�,     �               # specify the url   7quote_page = ‘http://www.bloomberg.com/quote/SPX:IND'�               7quote_page = ‘http://www.bloomberg.com/quote/SPX:IND'5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             \�,    �               7quote_page = ‘http://www.bloomberg.com/quote/SPX:IND'5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             \�,    �               7Quote_page = ‘http://www.bloomberg.com/quote/SPX:IND'5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             \�,�    �               7quote_page = ‘http://www.bloomberg.com/quote/SPX:IND'5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             \�,�     �               -soup = BeautifulSoup(page, ‘html.parser’)5�_�      	                 '    ����                                                                                                                                                                                                                                                                                                                                                             \�,�     �               +soup = BeautifulSoup(page, 'html.parser’)5�_�      
           	      &    ����                                                                                                                                                                                                                                                                                                                                                             \�,�     �               ?name_box = soup.find(‘h1’, attrs={‘class’: ‘name’})5�_�   	              
      ,    ����                                                                                                                                                                                                                                                                                                                                                             \�,�     �               =name_box = soup.find(‘h1’, attrs={'class’: ‘name’})5�_�   
                    /    ����                                                                                                                                                                                                                                                                                                                                                             \�,�     �               ;name_box = soup.find(‘h1’, attrs={'class': ‘name’})5�_�                       4    ����                                                                                                                                                                                                                                                                                                                                                             \�,�    �               9name_box = soup.find(‘h1’, attrs={'class': 'name’})5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             \�,�     �               7name_box = soup.find(‘h1’, attrs={'class': 'name'})5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             \�,�    �               5name_box = soup.find('h1’, attrs={'class': 'name'})5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             \�,�    �               name = name_box.text.strip() 5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             \�,�     �               
print name5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             \�-     �               	printname5�_�                       
    ����                                                                                                                                                                                                                                                                                                                                                             \�-    �               
print(name5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             \�-     �               Aprice_box = soup.find(‘div’, attrs={‘class’:’price’})5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             \�-     �               ?price_box = soup.find('div’, attrs={‘class’:’price’})5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             \�-1     �                �             5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             \�-3     �                5�_�                       $    ����                                                                                                                                                                                                                                                                                                                                                             \�-7     �               =price_box = soup.find('div', attrs={‘class’:’price’})5�_�                       *    ����                                                                                                                                                                                                                                                                                                                                                             \�-9     �               ;price_box = soup.find('div', attrs={'class’:’price’})5�_�                       ,    ����                                                                                                                                                                                                                                                                                                                                                             \�-;     �               9price_box = soup.find('div', attrs={'class':’price’})5�_�                       2    ����                                                                                                                                                                                                                                                                                                                                                             \�-=   	 �               7price_box = soup.find('div', attrs={'class':'price’})5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             \�-H     �               print price5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             \�-J     �               
printprice5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             \�-J     �               print(price5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             \�-O    �               print(price5�_�                             ����                                                                                                                                                                                                                                                                                                                                                             \�-|     �                5�_�      !                      ����                                                                                                                                                                                                                                                                                                                                                             \�-|     �               ''5�_�       "           !          ����                                                                                                                                                                                                                                                                                                                                                             \�-}     �               ''5�_�   !   #           "          ����                                                                                                                                                                                                                                                                                                                                                             \�-}     �               ''''5�_�   "   $           #           ����                                                                                                                                                                                                                                                                                                                                                             \�-~     �                5�_�   #   %           $          ����                                                                                                                                                                                                                                                                                                                                                             \�-     �               ""5�_�   $   &           %          ����                                                                                                                                                                                                                                                                                                                                                             \�-     �               ""5�_�   %   '           &          ����                                                                                                                                                                                                                                                                                                                                                             \�-�     �               """"5�_�   &   (           '          ����                                                                                                                                                                                                                                                                                                                                                             \�-�     �               """"5�_�   '   )           (          ����                                                                                                                                                                                                                                                                                                                                                             \�-�     �               """"""5�_�   (   *           )          ����                                                                                                                                                                                                                                                                                                                                                             \�-�     �               """"""5�_�   )   +           *      $    ����                                                                                                                                                                                                                                                                                                                                                             \�.\     �               '"""Example scraper script, built to """5�_�   *   ,           +          ����                                                                                                                                                                                                                                                                                                                                                             \�.a     �               """Example scraper script"""5�_�   +   -           ,          ����                                                                                                                                                                                                                                                                                                                                                             \�/E    �               import urllib25�_�   ,   .           -           ����                                                                                                                                                                                                                                                                                                                               $          $       V   $    \�/i     �             �             5�_�   -   /           .           ����                                                                                                                                                                                                                                                                                                                               $          $       V   $    \�/j     �                 # import libraries5�_�   .   0           /           ����                                                                                                                                                                                                                                                                                                                               $          $       V   $    \�/n    �                1"""Example scraper script using bs4 and urllib"""5�_�   /   1           0          ����                                                                                                                                                                                                                                                                                                                               $          $       V   $    \�/�     �               from bs4 import BeautifulSoup5�_�   0               1          ����                                                                                                                                                                                                                                                                                                                               "                 v       \�/�    �               #from bs4 import BeautifulSoup as bs5��