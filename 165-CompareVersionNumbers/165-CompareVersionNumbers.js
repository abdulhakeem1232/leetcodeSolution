        version1=version1.replaceAll('..', '.')
    }
    while (version2.includes('..') ) {
        version2=version2.replaceAll('..', '.')
    }
console.log(version1,version2)
    if (version1 > version2) return 1
    else if (parseInt(version2) == parseInt(version1)) return 0
    else return -1
};
"
