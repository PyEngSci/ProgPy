import numpy as np
gvals=[]; g=0
for x in np.arange(-3,3,0.1): g=g+np.exp(-x**2)*0.1; gvals.append(g)
