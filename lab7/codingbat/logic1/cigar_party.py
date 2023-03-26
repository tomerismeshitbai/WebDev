def cigar_party(cigars, is_weekend):
    return ((is_weekend or cigars >= 40) and (is_weekend or cigars <= 60))